const test = require("flug");
const proj4 = require("proj4");
const collect = require("./index.js");

test("proj4", ({ eq }) => {
  const proj4 = collect();
  const reproj = proj4("EPSG:4326", "EPSG:32610").forward;
  eq(reproj([0, 0]), [8274487.380924415, 19995929.886041995]);
});

proj4.defs("test", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");

test("proj4 custom def", ({ eq }) => {
  const proj4 = collect();
  eq("test" in proj4.defs, true);
});
