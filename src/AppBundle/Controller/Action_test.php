<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class Action_test extends Controller
{
    /**
     * @Route("/action", name="action")
     */
    public function test()
    {
        $date = [];
        $date['month'] = 'Septembre';
        $date['year'] = '2019';
        return $this->render('action.html.twig',
            [
                'date' => $date
            ]);
    }
}