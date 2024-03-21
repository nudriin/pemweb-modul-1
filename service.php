<?php
$data = array();

// Mengambil data dari file jika ada
if (file_exists('family_data.json')) {
    $data = json_decode(file_get_contents('family_data.json'), true);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST["name"];
    $jumlah_kata = str_word_count($name);
    $jumlah_huruf = strlen($name);
    $nama_kebalikan = strrev($name);
    $jumlah_konsonan = 0;
    $jumlah_vokal = 0;
    for ($i = 0; $i < strlen($name); $i++) {
        $huruf = strtolower($name[$i]);
        if (preg_match("/^[a-z]$/", $huruf)) {
            if (in_array($huruf, array("a", "i", "u", "e", "o"))) {
                $jumlah_vokal++;
            } else {
                $jumlah_konsonan++;
            }
        }
    }

    $family = [
        'name' => $name,
        'words_count' => $jumlah_kata,
        'characters_count' => $jumlah_huruf,
        'reverse_name' => $nama_kebalikan,
        'vocal_count' => $jumlah_vokal,
        'non_vocal_count' => $jumlah_konsonan,
    ];

    // Menambah data ke array
    array_push($data, $family);

    // Menyimpan data ke dalam file
    file_put_contents('family_data.json', json_encode($data));
    echo json_encode($data);
}
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo json_encode($data);
}
