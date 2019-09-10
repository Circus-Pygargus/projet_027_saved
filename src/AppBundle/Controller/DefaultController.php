<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Extensions\DateExtension;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }



///////////////////////////////////////////////////////////////////
//////// ROUTE + TABLEAUX RECAP MENSUEL PAGE DE SAISIE ////////////
///////////////////////////////////////////////////////////////////

    /**
     * @Route("/action", name="action")
     */
    public function action(){

        // $twig->addExtension(new DateExtension());
        

        $date = [];
        $date['month'] = 'Septembre';
        $date['year'] = '2019';
        $actions[0]=[
            'date'=>'15/05/2019',
            'nature'=>'Formation',
            'trajet'=>'Dijon-Besançon',
            'km'=>'200km',
            'other_cost'=>'20.00',
            'durée'=>'04h30',
            'valorisation'=>'85.18',
            'frais'=>'83.20',
            'payement'=>'80.00',
            'don'=>'3.20'
        ];
        $actions[1]=[
            'date'=>'22/05/2019',
            'nature'=>'Réunion externe',
            'trajet'=>'Dole-Dijon',
            'km'=>'100km',
            'other_cost'=>'20.00',
            'durée'=>'01h45',
            'valorisation'=>'33.13',
            'frais'=>'51.30',
            'payement'=>'5.00',
            'don'=>'3.20'
        ];
        return $this->render(
        'action.html.twig',
        [
            'date' => $date,
           'actions'=>$actions

        ]
    );

    
    }

}
