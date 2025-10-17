function FormatNumber(num: number): string {
    const str: string = num.toString();

    if (num <= 0) return str;
    else if (num == 1) return str.concat("st");
    else if (num == 2) return str.concat("nd");
    else if (num == 3) return str.concat("rd");
    else return str.concat("th");
}

export default FormatNumber;