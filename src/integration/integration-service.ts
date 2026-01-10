import { IntegrationConfiguration } from "./models/integration-configuration";
import { IntegrationSetting } from "./models/integration-setting";

export abstract class IntegrationService {
    public abstract getIntegrationConfigurationById(id: string): IntegrationConfiguration;

    public abstract getIntegrationConfigurationValue(
        integrationId: string,
        configurationId: string,
    ): string;

    public abstract updateIntegrationSettingValue(
        integrationId: string,
        configurationKey: string,
        configurationValue: any,
        type: string,
        multiple: boolean,
    ): void;

    public abstract getIntegrationSettings(integrationId: string): IntegrationSetting[];
}