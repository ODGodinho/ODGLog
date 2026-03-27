import type {
    LoggerParserInterface,
    LoggerPluginInterface,
} from "../../src/index";

/**
 * Test Plugin Logger to unit tests
 *
 * @class TestPluginLogger
 * @implements {LoggerPluginInterface}
 */
export class TestPluginLogger implements LoggerPluginInterface {

    public async parser(data: LoggerParserInterface): Promise<LoggerParserInterface> {
        return {
            ...data,
            message: "test",
        };
    }

}
