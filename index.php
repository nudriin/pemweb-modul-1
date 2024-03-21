<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body class="font-poppins">
    <section class="flex flex-col items-center justify-center h-full gap-4 my-10">
        <div class="p-6 space-y-6 border-2 rounded-xl border-slate-900">
            <h1 class="text-4xl font-bold font-rubik text-slate-900">My Family List</h1>
            <form class="flex flex-col gap-4">
                <input class="px-4 py-2 border-2 rounded-lg border-slate-900" type="text" id="name" placeholder="Input name" onchange="handleChange()" name="name">
                <input class="flex-grow px-4 py-2 text-white rounded-lg cursor-pointer bg-slate-900 hover:shadow-lg" type="button" value="Add" onclick="handleSubmit()">
            </form>
        </div>
        <div class="p-6 space-y-6 rounded-xl text-slate-900">
            <table class="p-2">
                <thead class="p-2 text-white border-2 rounded-lg border-slate-900 bg-slate-900">
                    <tr>
                        <th scope="col" class="px-4 py-2 text-center">Nama</th>
                        <th scope="col" class="px-4 py-2 text-center">Kata</th>
                        <th scope="col" class="px-4 py-2 text-center">Huruf</th>
                        <th scope="col" class="px-4 py-2 text-center">Terbalik</th>
                        <th scope="col" class="px-4 py-2 text-center">Vocal</th>
                        <th scope="col" class="px-4 py-2 text-center">Konsonan</th>
                    </tr>
                </thead>
                <tbody class="p-2 border-2 border-slate-900">
                </tbody>
            </table>
        </div>
    </section>
</body>
<script src="./script.js"></script>
</html>