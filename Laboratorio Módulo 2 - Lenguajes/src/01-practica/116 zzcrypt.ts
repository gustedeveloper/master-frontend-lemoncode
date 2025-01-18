console.log("#ZZCrypt");

// Descifra el siguiente secreto:
let secret: string =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
let plain: string = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
let cipher: string = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret: string): string {
  return secret
    .split("")
    .map((char) => {
      if (char === " ") return " ";
      const index = cipher.indexOf(char);
      return index !== -1 ? plain[index] : char;
    })
    .join("");
}

console.log(decrypt(secret));
