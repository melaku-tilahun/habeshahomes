<?php

namespace App\Console\Commands;

use App\Services\Elasticsearch\PropertyIndexer;
use Illuminate\Console\Command;

class ReindexProperties extends Command
{
    protected $signature = 'search:reindex {--fresh : Delete and recreate index}';
    protected $description = 'Reindex all published properties into Elasticsearch';

    public function handle(PropertyIndexer $indexer): int
    {
        $this->info('Starting property reindex...');

        if ($this->option('fresh')) {
            $this->warn('Deleting existing index...');
            $indexer->reindexAll();
        } else {
            \App\Models\Property::published()->chunk(100, function ($properties) use ($indexer) {
                foreach ($properties as $property) {
                    $indexer->index($property);
                }
                $this->info('Indexed batch of ' . $properties->count());
            });
        }

        $this->info('Reindex complete.');
        return Command::SUCCESS;
    }
}
