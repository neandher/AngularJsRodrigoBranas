<?php

$contato = [
              'id' => 3,
              'nome' => "Maria Pranto do joao",
              'telefone' => "423423423",
              'data' => date('d/m/Y H:i'),
              'cor' => "blue",
              'operadora' => ['nome' => "Tim", 'codigo' => "41", 'categoria' => "Celular"]
              ];


echo json_encode($contato);