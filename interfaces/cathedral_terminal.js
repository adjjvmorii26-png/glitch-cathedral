const {run:f}=require("../fault_nave/nave_core.js");
const {run:fr}=require("../fragment_transept/transept_split.js");
const {run:d}=require("../desync_crypt/crypt_unsync.js");
const {run:s}=require("../collapse_spire/spire_growth.js");
const {run:n}=require("../noise_reliquary/reliquary_random.js");
const {run:p}=require("../patch_altar/altar_fix.js");
async function main(){console.log("Cathedral Terminal…\n");console.log("Fault:",f(0));console.log("Fragment:",fr(0));console.log("Desync:",d(0));console.log("Spire:",s(0));console.log("Noise:",n(0));console.log("Patch:",p(0));}
if(require.main===module)main();
