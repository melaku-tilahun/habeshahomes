<?php

namespace App\Services\Elasticsearch;

use Elastic\Elasticsearch\Client;
use Elastic\Elasticsearch\ClientBuilder;
use Illuminate\Support\Facades\Log;

class ElasticsearchService
{
    protected ?Client $client = null;

    public function getClient(): ?Client
    {
        if ($this->client === null) {
            try {
                $this->client = ClientBuilder::create()
                    ->setHosts(config('habeshahomes.elasticsearch.hosts', ['localhost:9200']))
                    ->setRetries(2)
                    ->build();
            } catch (\Throwable $e) {
                Log::warning('Elasticsearch client connection could not be established: ' . $e->getMessage());
                return null;
            }
        }

        return $this->client;
    }

    public function indexExists(string $index): bool
    {
        $client = $this->getClient();
        if (!$client) {
            return false;
        }

        try {
            return $client->indices()->exists(['index' => $index])->asBool();
        } catch (\Throwable $e) {
            Log::warning("ES index check failed for {$index}: " . $e->getMessage());
            return false;
        }
    }

    public function createIndex(string $index, array $mapping): void
    {
        $client = $this->getClient();
        if (!$client) {
            return;
        }

        try {
            if ($this->indexExists($index)) {
                return;
            }

            $replicas = (int) config('habeshahomes.elasticsearch.replicas', app()->isProduction() ? 1 : 0);

            $client->indices()->create([
                'index' => $index,
                'body' => [
                    'settings' => [
                        'number_of_shards' => (int) config('habeshahomes.elasticsearch.shards', 1),
                        'number_of_replicas' => $replicas,
                        'analysis' => [
                            'analyzer' => [
                                'ethiopian_text' => [
                                    'type' => 'custom',
                                    'tokenizer' => 'standard',
                                    'filter' => ['lowercase', 'asciifolding', 'word_delimiter'],
                                ],
                            ],
                        ],
                    ],
                    'mappings' => $mapping,
                ],
            ]);
        } catch (\Throwable $e) {
            Log::error("ES index creation failed for {$index}: " . $e->getMessage());
        }
    }

    public function deleteIndex(string $index): void
    {
        $client = $this->getClient();
        if (!$client) {
            return;
        }

        try {
            if ($this->indexExists($index)) {
                $client->indices()->delete(['index' => $index]);
            }
        } catch (\Throwable $e) {
            Log::warning("ES deleteIndex failed for {$index}: " . $e->getMessage());
        }
    }

    public function indexDocument(string $index, string $id, array $body): void
    {
        $client = $this->getClient();
        if (!$client) {
            return;
        }

        try {
            $client->index([
                'index' => $index,
                'id' => $id,
                'body' => $body,
                'refresh' => 'wait_for',
            ]);
        } catch (\Throwable $e) {
            Log::error("ES indexDocument failed for {$index}/{$id}: " . $e->getMessage());
        }
    }

    public function deleteDocument(string $index, string $id): void
    {
        $client = $this->getClient();
        if (!$client) {
            return;
        }

        try {
            $client->delete([
                'index' => $index,
                'id' => $id,
            ]);
        } catch (\Throwable $e) {
            Log::warning("ES delete failed for {$index}/{$id}: " . $e->getMessage());
        }
    }

    public function search(string $index, array $query): array
    {
        $client = $this->getClient();
        if (!$client) {
            throw new \RuntimeException('Elasticsearch client is unavailable.');
        }

        $response = $client->search([
            'index' => $index,
            'body' => $query,
        ]);

        return $response->asArray();
    }
}
