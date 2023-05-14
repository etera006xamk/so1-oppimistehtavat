import React, { useState } from 'react';

function PainoindeksiLaskuri() {
  const [pituus, setPituus] = useState<number>();
  const [paino, setPaino] = useState<number>();
  const [painoindeksi, setPainoindeksi] = useState<number>();

  const laskePainoindeksi = () => {
    if (pituus && paino) {
      const indeksi = (paino / Math.pow(pituus/100, 2)).toFixed(2);
      setPainoindeksi(Number(indeksi));
    }
  }

  return (
    <div>
      <label>
        Pituus (cm):
        <input type="number" value={pituus} onChange={e => setPituus(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Paino (kg):
        <input type="number" value={paino} onChange={e => setPaino(Number(e.target.value))} />
      </label>
      <br />
      <button onClick={laskePainoindeksi}>Laske painoindeksi</button>
      {painoindeksi && <p>Painoindeksi: {painoindeksi}</p>}
    </div>
  );
}

export default PainoindeksiLaskuri;

