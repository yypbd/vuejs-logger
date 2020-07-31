class Logger {
    constructor() {

    }

    _canOneLine(log) {
        return typeof log === "undefined" ||
            typeof log === "boolean" ||
            typeof log === "number" ||
            typeof log === "string" ||
            typeof log === "bigint"
    }

    _log(func, tag, message, desc) {
        if (this._canOneLine(message)) {
            if (desc) {
                func(`[${tag}] ${desc} - ${message}`)
            } else {
                func(`[${tag}] ${message}`)
            }
        } else {
            func(`[${tag}] ${desc}`)
            func(message)
        }
    }

    info(tag, message, desc) {
        if (process.env.NODE_ENV === 'production') return

        this._log(console.info, tag, message, desc)
    }

    debug(tag, message, desc) {
        if (process.env.NODE_ENV === 'production') return

        this._log(console.debug, tag, message, desc)
    }

    warn(tag, message, desc) {
        this._log(console.warn, tag, message, desc)
    }

    error(tag, message, desc) {
        this._log(console.error, tag, message, desc)
    }
}

export const logger = new Logger()
