<?php
// Чтение файла с ценами
$pricesFile = 'prices.txt';
$pricesData = file_get_contents($pricesFile);

// Разделение данных на строки
$lines = explode("\n", $pricesData);

// Инициализация массива для хранения цен
$prices = [
    "mlbb" => [],
    "pubg" => []
];

$currentCategory = null;

// Проход по строкам и заполнение массива
foreach ($lines as $line) {
    $line = trim($line);
    
    if (empty($line)) {
        continue; // Пропускаем пустые строки
    }
    
    // Определяем текущую категорию
    if ($line === "MLBB:") {
        $currentCategory = "mlbb";
    } elseif ($line === "PUBG Mobile:") {
        $currentCategory = "pubg";
    } else {
        // Разделяем строку на ранг и цену
        list($rank, $price) = explode(":", $line);
        $prices[$currentCategory][] = ["rank" => trim($rank), "price" => trim($price)];
    }
}

// Возвращаем данные в формате JSON
echo json_encode($prices);
?>
