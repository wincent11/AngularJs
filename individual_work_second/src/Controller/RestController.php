<?php

namespace App\Controller;

use App\Entity\Rest;
use App\Form\RestType;
use App\Repository\RestRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/rest")
 */

 
class RestController extends AbstractController
{
    /**
     * @Route("/", name="rest_index", methods={"GET"})
     * @param RestRepository $restRepository
     * @return Response
     */
    public function index(RestRepository $restRepository): Response
    {
        return $this->render('rest/index.html.twig', [
            'rest' => $restRepository->findAll(),
        ]);
    }
    /**
     * @Route("/{name}", name="find_rest_by_name")
     * @param $name
     * @param RestRepository $restRepository
     * @return Response
     */
    
    public function findAllByName($name, RestRepository $restRepository): Response
    {
        return $this->render('rest/index.html.twig', [
            'rest' => $restRepository->findByName($name),
        ]);
    }

    /**
     * @Route("/new/create", name="rest_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $rest = new Rest();
        $form = $this->createForm(RestType::class, $rest);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($rest);
            $entityManager->flush();

            return $this->redirectToRoute('rest_index');
        }

        return $this->render('rest/new.html.twig', [
            'rest' => $rest,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/details/{id}", name="rest_show", methods={"GET"})
     * @param Rest $rest
     * @return Response
     */
    public function show(Rest $rest): Response
    {
        return $this->render('rest/show.html.twig', [
            'rest' => $rest,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="rest_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Rest $rest
     * @return Response
     */
    public function edit(Request $request, Rest $rest): Response
    {
        $form = $this->createForm(RestType::class, $rest);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('rest_index');
        }

        return $this->render('rest/edit.html.twig', [
            'rest' => $rest,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/delete/{id}", name="rest_delete", methods={"DELETE"})
     * @param Request $request
     * @param Rest $rest
     * @return Response
     */
    public function delete(Request $request, Rest $rest): Response
    {
        if ($this->isCsrfTokenValid('delete'.$rest->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($rest);
            $entityManager->flush();
        }

        return $this->redirectToRoute('rest_index');
    }
}
