-- SQL to update the tables to save the responses

-- Table for lifestyle questions
CREATE TABLE IF NOT EXISTS lifestyle_questions (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    working_hours TEXT NOT NULL,
    commute_time TEXT NOT NULL,
    reading_speed TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for important dates
CREATE TABLE IF NOT EXISTS important_dates (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);