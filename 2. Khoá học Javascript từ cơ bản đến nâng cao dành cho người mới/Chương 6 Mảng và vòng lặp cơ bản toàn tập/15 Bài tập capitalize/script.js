// In hoa chua cai dau theo vi du VD: "my name is evondev" => "My Name Is Evondev"

const capitalizeStr = function (str) {
    str = str.split(" ");
    return str
        .map((item) => {
            if (item.length === 0) return null;
            firstLetter = item.charAt(0).toUpperCase();
            return `${firstLetter}${item.slice(1).toLowerCase()}`;
        })
        .join(" ");
};

const name = "my name is evondev";
console.log(capitalizeStr(name));
