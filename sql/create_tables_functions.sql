-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name TEXT NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create lifestyle_questions table
CREATE TABLE IF NOT EXISTS lifestyle_questions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    working_hours TEXT NOT NULL,
    commute_time TEXT NOT NULL,
    reading_speed TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create important_dates table
CREATE TABLE IF NOT EXISTS important_dates (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    date DATE NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create planner table
CREATE TABLE IF NOT EXISTS planner (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Function to get user events
CREATE OR REPLACE FUNCTION get_user_events(user_id INT)
RETURNS TABLE(id INT, name TEXT, date DATE, created_at TIMESTAMPTZ) AS $$
BEGIN
    RETURN QUERY
    SELECT id, name, date, created_at
    FROM events
    WHERE events.user_id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Function to get user lifestyle questions
CREATE OR REPLACE FUNCTION get_user_lifestyle_questions(user_id INT)
RETURNS TABLE(id INT, working_hours TEXT, commute_time TEXT, reading_speed TEXT, created_at TIMESTAMPTZ) AS $$
BEGIN
    RETURN QUERY
    SELECT id, working_hours, commute_time, reading_speed, created_at
    FROM lifestyle_questions
    WHERE lifestyle_questions.user_id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Function to get user important dates
CREATE OR REPLACE FUNCTION get_user_important_dates(user_id INT)
RETURNS TABLE(id INT, date DATE, description TEXT, created_at TIMESTAMPTZ) AS $$
BEGIN
    RETURN QUERY
    SELECT id, date, description, created_at
    FROM important_dates
    WHERE important_dates.user_id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Function to get user planner content
CREATE OR REPLACE FUNCTION get_user_planner(user_id INT)
RETURNS TABLE(id INT, content TEXT, created_at TIMESTAMPTZ) AS $$
BEGIN
    RETURN QUERY
    SELECT id, content, created_at
    FROM planner
    WHERE planner.user_id = user_id;
END;
$$ LANGUAGE plpgsql;