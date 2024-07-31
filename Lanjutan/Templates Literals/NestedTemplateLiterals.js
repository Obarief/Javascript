const mhs = {
    nama: 'Oktavari Budi Arief',
    semester: 5,
    matakuliah: [
        'Pemrograman Web',
        'Pemrograman Jaringan',
        'Pemrograman Python'
    ]
};

function matkul(matakuliah){
    return `
    <ol>
        ${matakuliah.map(m => `<li> ${m} </li>`).join('')}
    </ol>
    `
};


const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${matkul(mhs.matakuliah)}
</div>`;

document.body.innerHTML = el;