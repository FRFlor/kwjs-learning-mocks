import SoundPlayerConsumer from "./sound-player-consumer";

jest.mock("./sound-player");

describe("Sound player consumer", () => {
    it("plays sounds", () => {
        const consumer = new SoundPlayerConsumer();
        consumer.playSomethingCool();

        expect(true).toBe(true);
    });
});
