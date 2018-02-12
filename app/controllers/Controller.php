<?php

namespace App\app\controllers;


class Controller
{
    public function __invoke()
    {
        switch ($_SERVER['REQUEST_URI']) {
            case ("/"):
                $this->view('index');
                break;
            default:
                $this->ErrorPage404();
        }

    }

    /**
     * 404
     */
    public function ErrorPage404()
    {
        header('HTTP/1.1 404 Not Found');
        header("Status: 404 Not Found");
        $this->view('404');
        exit;
    }

    /**
     * @param $template
     */
    public function view($template)
    {
        require_once $_SERVER['DOCUMENT_ROOT'].'/view/'.$template.'.php';
    }

}