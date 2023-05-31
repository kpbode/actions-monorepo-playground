import { hello } from "shared";
import * as core from "@actions/core";

async function run(): Promise<void> {

    const input = core.getInput("test_parameter_1", { required: true })

    core.debug(`Action 1: ${hello()}, (${input})`)
}


run().catch(error => { console.error(error); });
