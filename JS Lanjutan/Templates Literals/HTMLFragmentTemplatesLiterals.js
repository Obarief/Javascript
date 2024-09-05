const mhs = [
    {
        nama: 'okta',
        umur: 20
    },
    {
        nama: 'buyung',
        umur: 21
    },
    {
        nama: 'jupar',
        umur: 23
    }
];

const el = `<div class="mhs">
    ${mhs.map(m => `<ul> 
        <li>${m.nama}</li>
        <li>${m.umur}</li>
        </ul>`).join('')}
</div>`;


document.body.innerHTML = el