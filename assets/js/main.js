function fn_calculate_age(dob) {
    dob = new Date(dob);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    console.log(Math.abs(age_dt.getUTCFullYear() - 1970));
    document.getElementById('idOutput').innerHTML = Math.abs(age_dt.getUTCFullYear() - 1970);
}

// Arrow function

let arrow_fn_calculate_age = (dob) => {
    dob = new Date(dob);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    console.log(Math.abs(age_dt.getUTCFullYear() - 1970));
    document.getElementById('idOutput').innerHTML = Math.abs(age_dt.getUTCFullYear() - 1970);
}