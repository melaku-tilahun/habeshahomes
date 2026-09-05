<?php

namespace App\Listeners;

use App\Events\PropertyCreated;
use App\Events\PropertyUpdated;
use App\Services\Elasticsearch\PropertyIndexer;

class IndexPropertyToElasticsearch
{
    public function __construct(protected PropertyIndexer $indexer) {}

    public function handle(PropertyCreated|PropertyUpdated $event): void
    {
        $this->indexer->index($event->property);
    }
}
