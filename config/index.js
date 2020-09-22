import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "tutorial",
  version,
  design: "rrolon47",
  code: "rrolon47",
  department: "accessories",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {
    fit: ["neckRatio", "widthRatio", "lengthRatio"]
  },
  measurements: ["headCircumference"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["bib"],
  options: {
    neckRatio: { pct: 80, min: 70, max: 90 }, 
    widthRatio: { pct: 45, min: 35, max: 55 }, 
    lengthRatio: { pct: 50, min: 40, max: 65 }, 
  }
};
