<?php

namespace App\Repository;  // Assicurati che il namespace sia corretto per la tua struttura di directory

use Doctrine\ORM\EntityRepository;

class MovieRepository extends EntityRepository
{
    public function findByCriteria(?string $genre, ?string $sort): array
    {
        $qb = $this->createQueryBuilder('m');

        if ($genre) {
            $qb->andWhere('m.genre = :genre')
               ->setParameter('genre', $genre);
        }

        if ($sort) {
            if ($sort === 'most_recent') {
                $qb->orderBy('m.releaseDate', 'DESC');
            } elseif ($sort === 'rating') {
                $qb->orderBy('m.rating', 'DESC');
            }
        }

        return $qb->getQuery()->getResult();
    }
}
