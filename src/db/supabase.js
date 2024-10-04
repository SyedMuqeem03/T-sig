import { createClient } from "@supabase/supabase-js";
import config from "../config/env";

const supabase = createClient(config.supabaseUrl, config.supabaseApi);

function getData() {
  try {
    return supabase.from("RF ID").select("*");
  } catch (error) {
    console.log("error supabase :: ", supabase);
  }
}

function putData(data={}) {
  return supabase
    .from("RF ID")
    .insert(data);
}

export { getData, putData };
