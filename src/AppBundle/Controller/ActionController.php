<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ActionController extends Controller 
{

    /** 
     * @Route("/action", name="action")
     */
    public function action (Request $request) 
    {
        // today's date
        $date = [];
        $date['month'] = date('F');
        $date['year'] = date('Y');
        switch ($date['month']) {
            case 'January':
                $date['month'] = 'Janvier';
                break;
            case 'February':
                $date['month'] = 'Février';
                break;
            case 'March':
                $date['month'] = 'Mars';
                break;
            case 'April':
                $date['month'] = 'Avril';
                break;
            case 'May':
                $date['month'] = 'Mai';
                break;
            case 'June':
                $date['month'] = 'Juin';
                break;
            case 'July':
                $date['month'] = 'Juillet';
                break;
            case 'August':
                $date['month'] = 'Août';
                break;
            case 'September':
                $date['month'] = 'Septembre';
                break;
            case 'October':
                $date['month'] = 'Octobre';
                break;
            case 'November':
                $date['month'] = 'Novembre';
                break;
            case 'December':
                $date['month'] = 'Décembre';
                break;
        }


        // A RECUPERER EN BDD
        $taux_km = 0.316;
        $user['username'] = 'Mario';
        $user['id'] = '1';
        $asso['id'] = '1';


        // pour la date récup la date en chiffre

        $actions[0] = [
            'id' => '1',
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
        $actions[1] = [
            'id' => '2',
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

        return $this->render('action.html.twig',
            [
                'taux_km' => $taux_km,
                'user' => $user,
                'date' => $date,
                'actions' => $actions
            ]
        );
    }
}