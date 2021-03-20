import { extend } from "vee-validate";
import { regex, required } from "vee-validate/dist/rules";

const scoreRegExp = /(?<!\S)[0-9](?!\S)/g
extend("regex", regex);