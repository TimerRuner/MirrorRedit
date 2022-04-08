import React from "react"
import styles from "./textcontent.css"
import { UserLink } from "./UserLink"
import { Title } from "./Title"
import { CreatedAt } from "./CreatedAt"

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <UserLink />
                <CreatedAt />
            </div>
            <Title />
        </div>
    )
}
