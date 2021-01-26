var data = [
    "RPL",
    "TI",
    "Multimedia"
]

function tampil() {
    var thead = document.querySelector('thead')
    var tbody = document.querySelector('tbody')
    thead.innerHTML = `
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Jurusan</th>
      <th scope="col">Action</th>
    </tr>
  `
    for( let i = 0; i < data.length; i ++){
        
        var btnedit = `<button type="button" class="btn btn-primary id="edit" onclick='edit(`+i+`)'>Edit</button>`
        var btnhapus = `<button type="button" class="btn btn-primary" onclick='hapus(`+i+`)'>Hapus</button>`
        j = 1 + i
        tbody.innerHTML+= `<tr>
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