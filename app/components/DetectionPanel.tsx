"use client";
import { useState } from "react";
export function DetectionPanel() {
    const [status, setStatus] =useState("Waiting");
    return (
        <section>
            <h2>
                Object Detection
            </h2>
            <button
                onClick={() =>
                    alert(
                        "Prepare object detection"
                    )
                }
            >
                Prepare Detection
            </button>

        </section>
    );
}
