import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* supabase integration types

### important_dates

| name       | type        | format | required |
|------------|-------------|--------|----------|
| id         | int8        | number | true     |
| user_id    | int8        | number | true     |
| date       | date        | string | true     |
| description| text        | string | true     |
| created_at | timestamptz | string | true     |

### lifestyle_questions

| name          | type        | format | required |
|---------------|-------------|--------|----------|
| id            | int8        | number | true     |
| user_id       | int8        | number | true     |
| working_hours | text        | string | true     |
| commute_time  | text        | string | true     |
| reading_speed | text        | string | true     |
| created_at    | timestamptz | string | true     |

### events

| name       | type        | format | required |
|------------|-------------|--------|----------|
| id         | int8        | number | true     |
| user_id    | int8        | number | true     |
| name       | text        | string | true     |
| date       | date        | string | true     |
| created_at | timestamptz | string | true     |

### users

| name       | type        | format | required |
|------------|-------------|--------|----------|
| id         | int8        | number | true     |
| email      | text        | string | true     |
| created_at | timestamptz | string | true     |

### planner

| name       | type        | format | required |
|------------|-------------|--------|----------|
| id         | int8        | number | true     |
| user_id    | int8        | number | true     |
| content    | text        | string | true     |
| created_at | timestamptz | string | true     |

*/

// Hooks for important_dates
export const useImportantDates = () => useQuery({
    queryKey: ['important_dates'],
    queryFn: () => fromSupabase(supabase.from('important_dates').select('*')),
});

export const useAddImportantDate = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newDate) => fromSupabase(supabase.from('important_dates').insert([newDate])),
        onSuccess: () => {
            queryClient.invalidateQueries('important_dates');
        },
    });
};

export const useUpdateImportantDate = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedDate) => fromSupabase(supabase.from('important_dates').update(updatedDate).eq('id', updatedDate.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('important_dates');
        },
    });
};

export const useDeleteImportantDate = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('important_dates').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('important_dates');
        },
    });
};

// Hooks for lifestyle_questions
export const useLifestyleQuestions = () => useQuery({
    queryKey: ['lifestyle_questions'],
    queryFn: () => fromSupabase(supabase.from('lifestyle_questions').select('*')),
});

export const useAddLifestyleQuestion = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newQuestion) => fromSupabase(supabase.from('lifestyle_questions').insert([newQuestion])),
        onSuccess: () => {
            queryClient.invalidateQueries('lifestyle_questions');
        },
    });
};

export const useUpdateLifestyleQuestion = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedQuestion) => fromSupabase(supabase.from('lifestyle_questions').update(updatedQuestion).eq('id', updatedQuestion.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('lifestyle_questions');
        },
    });
};

export const useDeleteLifestyleQuestion = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('lifestyle_questions').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('lifestyle_questions');
        },
    });
};

// Hooks for events
export const useEvents = () => useQuery({
    queryKey: ['events'],
    queryFn: () => fromSupabase(supabase.from('events').select('*')),
});

export const useAddEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newEvent) => fromSupabase(supabase.from('events').insert([newEvent])),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

export const useUpdateEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedEvent) => fromSupabase(supabase.from('events').update(updatedEvent).eq('id', updatedEvent.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

export const useDeleteEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('events').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

// Hooks for users
export const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: () => fromSupabase(supabase.from('users').select('*')),
});

export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => fromSupabase(supabase.from('users').insert([newUser])),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUser) => fromSupabase(supabase.from('users').update(updatedUser).eq('id', updatedUser.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('users').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

// Hooks for planner
export const usePlanner = () => useQuery({
    queryKey: ['planner'],
    queryFn: () => fromSupabase(supabase.from('planner').select('*')),
});

export const useAddPlanner = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newPlanner) => fromSupabase(supabase.from('planner').insert([newPlanner])),
        onSuccess: () => {
            queryClient.invalidateQueries('planner');
        },
    });
};

export const useUpdatePlanner = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedPlanner) => fromSupabase(supabase.from('planner').update(updatedPlanner).eq('id', updatedPlanner.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('planner');
        },
    });
};

export const useDeletePlanner = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('planner').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('planner');
        },
    });
};