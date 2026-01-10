import {
  IntegrationEvent,
  IntegrationHubEvent,
  DeviceEvent,
  DeviceAddedEvent,
  DeviceUpdatedEvent,
  DeviceMessageEvent,
  LanDeviceMessageEvent,
  DeviceStatusEvent,
  DeviceStatusType,
} from "./integration-events";

describe("IntegrationEvent", () => {
  it("should set and get integrationId", () => {
    // Arrange
    const integrationEvent = new (class extends IntegrationEvent {})();
    const expectedIntegrationId = "test-integration-id";

    // Act
    integrationEvent.integrationId = expectedIntegrationId;
    const actualIntegrationId = integrationEvent.integrationId;

    // Assert
    expect(actualIntegrationId).toBe(expectedIntegrationId);
  });
});

describe("IntegrationHubEvent", () => {
  it("should construct with the correct properties", () => {
    // Arrange
    const name = "test-name";
    const value = "test-value";
    const description = "test-description";
    const stateChange = true;

    // Act
    const integrationHubEvent = new IntegrationHubEvent(
      name,
      value,
      description,
      stateChange
    );

    // Assert
    expect(integrationHubEvent.name).toBe(name);
    expect(integrationHubEvent.value).toBe(value);
    expect(integrationHubEvent.description).toBe(description);
    expect(integrationHubEvent.stateChange).toBe(stateChange);
  });
});

describe("DeviceEvent", () => {
  it("should construct with the correct properties and have working getters", () => {
    // Arrange
    const deviceNetworkId = "test-device-network-id";
    const event = { data: "test-data" };

    // Act
    const deviceEvent = new DeviceEvent(deviceNetworkId, event);

    // Assert
    expect(deviceEvent.deviceNetworkId).toBe(deviceNetworkId);
    expect(deviceEvent.event).toBe(event);
  });
});

describe("DeviceAddedEvent", () => {
  it("should construct with the correct properties and have working getters", () => {
    // Arrange
    const deviceNetworkId = "test-device-network-id";
    const userInitiatedAdd = true;
    const fingerprint = new Map([["key", "value"]]);
    const data = new Map([["key", "value"]]);
    const parameters = new Map([["key", "value"]]);

    // Act
    const deviceAddedEvent = new DeviceAddedEvent(
      deviceNetworkId,
      userInitiatedAdd,
      fingerprint,
      data,
      parameters
    );

    // Assert
    expect(deviceAddedEvent.deviceNetworkId).toBe(deviceNetworkId);
    expect(deviceAddedEvent.isUserInitiatedAdd).toBe(userInitiatedAdd);
    expect(deviceAddedEvent.fingerprint).toBe(fingerprint);
    expect(deviceAddedEvent.data).toBe(data);
    expect(deviceAddedEvent.additionalParameters).toBe(parameters);
  });
});

describe("DeviceUpdatedEvent", () => {
  it("should construct with the correct properties and have working getters", () => {
    // Arrange
    const deviceNetworkId = "test-device-network-id";
    const updatedField = "test-updated-field";
    const parameters = new Map([["key", "value"]]);

    // Act
    const deviceUpdatedEvent = new DeviceUpdatedEvent(
      deviceNetworkId,
      updatedField,
      parameters
    );

    // Assert
    expect(deviceUpdatedEvent.deviceNetworkId).toBe(deviceNetworkId);
    expect(deviceUpdatedEvent.updatedField).toBe(updatedField);
    expect(deviceUpdatedEvent.additionalParameters).toBe(parameters);
  });
});

describe("DeviceMessageEvent", () => {
  it("should construct with the correct properties and have working getters", () => {
    // Arrange
    const deviceNetworkId = "test-device-network-id";
    const message = "test-message";

    // Act
    const deviceMessageEvent = new DeviceMessageEvent(deviceNetworkId, message);

    // Assert
    expect(deviceMessageEvent.deviceNetworkId).toBe(deviceNetworkId);
    expect(deviceMessageEvent.message).toBe(message);
  });
});

describe("LanDeviceMessageEvent", () => {
  it("should construct with the correct properties and have working getters", () => {
    // Arrange
    const macAddress = "test-mac-address";
    const remoteAddress = "test-remote-address";
    const remotePort = 1234;
    const message = "test-message";

    // Act
    const lanDeviceMessageEvent = new LanDeviceMessageEvent(
      macAddress,
      remoteAddress,
      remotePort,
      message
    );

    // Assert
    expect(lanDeviceMessageEvent.macAddress).toBe(macAddress);
    expect(lanDeviceMessageEvent.remoteAddress).toBe(remoteAddress);
    expect(lanDeviceMessageEvent.remotePort).toBe(remotePort);
    expect(lanDeviceMessageEvent.message).toBe(message);
  });
});

describe("DeviceStatusEvent", () => {
  it("should construct with the correct properties and have working getters", () => {
    // Arrange
    const deviceNetworkId = "test-device-network-id";
    const status = DeviceStatusType.ONLINE;

    // Act
    const deviceStatusEvent = new DeviceStatusEvent(deviceNetworkId, status);

    // Assert
    expect(deviceStatusEvent.deviceNetworkId).toBe(deviceNetworkId);
    expect(deviceStatusEvent.status).toBe(status);
  });
});
