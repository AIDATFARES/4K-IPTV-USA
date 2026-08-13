
const fs = require("fs");
const path = require("path");

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === "ENOTDIR" || err.code === "EBADF") filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync("src").filter(f => f.endsWith(".tsx") || f.endsWith(".ts"));
let modifiedCount = 0;

const replacements = [
  { regex: /(bg-\[)#060814(\])/g, replace: "$1#0c0f0f$2" },
  { regex: /(bg-\[)#070914(\])/g, replace: "$1#0c0f0f$2" },
  { regex: /(bg-\[)#080b12(\])/g, replace: "$1#0c0f0f$2" },
  { regex: /(bg-\[)#080b15(\])/g, replace: "$1#0c0f0f$2" },
  { regex: /(bg-\[)#0b0e14(\])/g, replace: "$1#121414$2" },
  { regex: /(bg-\[)#0c0f1a(\])/g, replace: "$1#121414$2" },
  { regex: /(bg-\[)#0c0f19(\])/g, replace: "$1#121414$2" },
  { regex: /(bg-\[)#0c101d(\])/g, replace: "$1#121414$2" },
  { regex: /(bg-\[)#0d1120(\])/g, replace: "$1#121414$2" },
  { regex: /(bg-\[)#0f1322(\])/g, replace: "$1#121414$2" },
  { regex: /(bg-\[)#11182b(\])/g, replace: "$1#1a1c1c$2" },
  { regex: /\b(bg|text|border|ring|shadow|from|via|to|decoration)-indigo-/g, replace: "$1-red-" },
  { regex: /\b(bg|text|border|ring|shadow|from|via|to|decoration)-violet-/g, replace: "$1-red-" },
  { regex: /\b(bg|text|border|ring|shadow|from|via|to|decoration)-cyan-/g, replace: "$1-red-" },
  { regex: /\b(bg|text|border|ring|shadow|from|via|to|decoration)-emerald-/g, replace: "$1-red-" },
  { regex: /\b(bg|text|border|ring|shadow|from|via|to|decoration)-orange-/g, replace: "$1-red-" },
  { regex: /\b(bg|text|border|ring|shadow|from|via|to|decoration)-teal-/g, replace: "$1-red-" },
  { regex: /\b(bg|text|border|ring|shadow|from|via|to|decoration)-slate-/g, replace: "$1-stone-" }
];

files.forEach(file => {
  const original = fs.readFileSync(file, "utf8");
  let updated = original;

  replacements.forEach(({ regex, replace }) => {
    updated = updated.replace(regex, replace);
  });

  if (original !== updated) {
    fs.writeFileSync(file, updated, "utf8");
    modifiedCount++;
  }
});

console.log(`Modified ${modifiedCount} files.`);

