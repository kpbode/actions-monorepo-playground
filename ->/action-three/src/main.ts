import { hello } from "shared";
import * as core from "@actions/core";

async function run(): Promise<void> {

    const input = core.getInput("test_parameter_2", { required: false })

    core.debug(`Action 3: ${hello()}, (${input})`)
}


run().catch(error => { console.error(error); });
