const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) => {
  try {
    const hasilMenonton = await Promise.all([
      promiseTheaterIXX(),
      promiseTheaterVGC(),
    ]);
    let marah = 0;
    let tidakMarah = 0;
    hasilMenonton.forEach((hasil) => {
      hasil.forEach((film) => {
        if (film.hasil === "marah") {
          marah++;
        } else {
          tidakMarah++;
        }
      });
    });

    if (emosi === "marah") {
      return marah;
    } else {
      return tidakMarah;
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
