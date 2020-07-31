import Vue from 'vue'

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

    _log(func, tag, subject, message) {
        if (!subject) {
            subject = ''
        }

        if (this._canOneLine(message)) {
            if (subject !== '' && message !== '') {
                subject = `${subject} - `
            }
            func(`${tag}${subject}${message}`)
        } else {
            func(`${tag}${subject}`)
            func(message)
        }
    }

    _getTagStr(tag) {
        if (tag instanceof Vue) {
            return `[${tag.$options.name}] `
        } else if (typeof tag === "string") {
            return `[${tag}] `
        } else {
            return ''
        }
    }

    info(tag, subject, message) {
        if (process.env.NODE_ENV === 'production') return

        this._log(console.info, this._getTagStr(tag), subject, message)
    }

    debug(tag, subject, message) {
        if (process.env.NODE_ENV === 'production') return

        this._log(console.debug, this._getTagStr(tag), subject, message)
    }

    warn(tag, subject, message) {
        this._log(console.warn, this._getTagStr(tag), subject, message)
    }

    error(tag, subject, message) {
        this._log(console.error, this._getTagStr(tag), subject, message)
    }
}

export const logger = new Logger()
