const berita = [
  { id: 1, kategori: "nasional" },
  { id: 2, kategori: "otomotif" },
  { id: 3, kategori: "olahraga" },
];

module.exports = {
  getAllberita: (req, res) => {
    res.status(200).json({
      message: "success get data",
      data: berita,
    });
  },

  getBeritaByID: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const mass = berita.find((halo) => halo.id == id);

    if (!mass) {
      res.status(400).json({
        message: "ndlogok raono neng daftar su!",
      });
      return;
    }

    res.status(200).json({
      message: "success get data",
      data: mass,
    });
  },

  addBerita: (req, res) => {
    res.status(200).json({
      message: "success get data",
      data: berita,
    });
  },

  deleteBeritaByID: (req, res) => {
    let idToRemvoe = 2;
    let newData = berita.filter((item) => item.id !== idToRemvoe);
    berita = newData;

    res.status(200).json({
      message: "success get data",
      data: berita,
    });
  },

  updateBerita: (req, res) => {
    res.status(200).json({
      message: "success get data",
      data: berita,
    });
  },
};
