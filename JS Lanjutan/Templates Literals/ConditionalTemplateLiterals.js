const lagu = {
    judul: 'kau adalah',
    penyanyi: 'Isyana Sarasvati',
    feat: 'Rayi Putra'
};

const el = `<div class="lagu">
    <ul>
        <li>${lagu.judul}</li>
        <li>${lagu.penyanyi} ${lagu.feat ? `(feat.${lagu.feat})` : '' }</li>
    </ul>
</div>`;

document.body.innerHTML = el