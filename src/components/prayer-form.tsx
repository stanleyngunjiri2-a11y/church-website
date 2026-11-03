"use client";

import { useState } from "react";
import { Send, Heart } from "lucide-react";

export default function PrayerForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="prayer-form-wrapper">
      {submitted ? (
        <div className="form-success" role="status">
          <Heart size={36} />
          <h3>Thank you for reaching out.</h3>
          <p>
            Your message has been prepared. We look forward to
            connecting with you as you begin your journey of faith.
          </p>
          <button
            className="button button-primary"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          className="prayer-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="form-field">
            <label htmlFor="fullName">Your full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              required
              maxLength={100}
            />
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+254 7XX XXX XXX"
                autoComplete="tel"
                required
                maxLength={20}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email address <span>(Optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="requestType">
              How can we walk with you?
            </label>

            <select id="requestType" name="requestType" required defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="accept-christ">
                I want to accept Jesus Christ
              </option>
              <option value="new-believer">
                I have accepted Jesus and need guidance
              </option>
              <option value="prayer">
                I would like someone to pray with me
              </option>
              <option value="learn">
                I want to learn more about Christianity
              </option>
              <option value="support">
                I need spiritual support
              </option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">
              Your prayer or message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={2000}
              placeholder="Share what is on your heart. You can also write a short prayer..."
            />
          </div>

          <label className="consent-checkbox">
            <input type="checkbox" required />
            <span>
              I agree to be contacted about my request and have read
              the Privacy Policy.
            </span>
          </label>

          <button type="submit" className="button button-primary form-submit">
            Send my message <Send size={17} />
          </button>

          <p className="form-privacy">
            Your information will be treated with care and will not
            be displayed publicly.
          </p>
        </form>
      )}
    </div>
  );
}
