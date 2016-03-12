<?php
$contatos[] = [
              'nome' => "Pedro jorge da silva",
              'telefone' => "75756756",
              'data' => date('d/m/Y H:i'),
              'cor' => "yellow",
              'operadora' => ['nome' => "Oi", 'codigo' => "14", 'categoria' => "Celular"]
              ];

$contatos[] = [
              'nome' => "Ana maria Guilherme",
              'telefone' => "756756756",
              'data' => date('d/m/Y H:i'),
              'cor' => "red",
              'operadora' => ['nome' => "vivo", 'codigo' => "15", 'categoria' => "Celular"]
              ];

$contatos[] = [
              'nome' => "Maria Pranto do joao",
              'telefone' => "423423423",
              'data' => date('d/m/Y H:i'),
              'cor' => "blue",
              'operadora' => ['nome' => "Tim", 'codigo' => "41", 'categoria' => "Celular"]
              ];

echo json_encode($contatos);