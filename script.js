var data = [
    "RPL",
    "TI",
    "Multimedia"
]

function tampil() {
    var table = document.getElementById('tabel')
    table.innerHTML = `<thead class="thead-light">
    <tr>
        <th>No</th>
        <th>Jurusan</th>
        <th>Action</th>
    </tr>
</thead>`
    for( let i = 0; i < data.length; i ++){
        var btnedit = `<button id="edit" onclick='edit(`+i+`)'>Edit</button>`
        var btnhapus = `<button id="hapus" onclick='hapus(`+i+`)'>Hapus</button>`
        j = 1 + i
        table.innerHTML+= `<tr>
        <td>`+j+`</td>
        <td>`+data[i]+`</td>
        <td>`+btnedit+ ` `+btnhapus+`
        </td>
    </tr>`

    }
}

function tambah() {
    var input = document.querySelector("input[name=jurusan]")
    data.push(input.value)
    tampil()
}

function hapus(i) {
    data.splice(i,1)
    tampil()
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

tampil()