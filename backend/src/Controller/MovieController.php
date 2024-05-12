<?php

namespace App\Controller;  // Assicurati che il namespace sia corretto per la tua struttura di directory

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\MovieRepository;

class MovieController
{
    /**
     * @Route("/movies", name="movies_list")
     */
    public function list(Request $request, MovieRepository $repository): JsonResponse
    {
        $genre = $request->query->get('genre');
        $sort = $request->query->get('sort');

        $movies = $repository->findByCriteria($genre, $sort);

        return $this->json($movies);
    }
}
