export class ExternalAPINotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ExternalAPINotFoundError'
  }
}

export class ExternalAPISchemaValidationFailError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ExternalAPISchemaValidationFailError'
  }
}

export class ExternalAPIInvalidRequestError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ExternalAPIInvalidRequestError'
  }
}
