import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  try {
    const dataPath = path.join(__dirname, '../public/data/sessions.json');
    if (!fs.existsSync(dataPath)) {
      console.log('No sessions.json found, skipping seed.');
      return;
    }
    
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    const data = JSON.parse(rawData);
    
    for (const session of data.sessions) {
      // Use the date as a simple ID for the session, or generate one. The frontend currently doesn't use IDs for sessions, just index. Let's use date as ID.
      const sessionId = session.date;
      
      const { error: sessionError } = await supabase
        .from('sessions')
        .upsert({
          id: sessionId,
          date: session.date,
          generated_at: session.generatedAt,
          week_label: session.weekLabel,
          newsjacking: session.newsjacking
        });
        
      if (sessionError) {
        console.error('Error inserting session:', sessionError);
        continue;
      }
      
      if (session.ideas) {
        for (const idea of session.ideas) {
          const type = idea.type || 'content';
          
          const { error: ideaError } = await supabase
            .from('ideas')
            .upsert({
              id: idea.id,
              session_id: sessionId,
              title: idea.title,
              account: idea.account,
              pillar: idea.pillar,
              pillar_label: idea.pillarLabel,
              funnel: idea.funnel,
              score: idea.score,
              bridge: idea.bridge,
              angles: idea.angles,
              drafted_post: idea.draftedPost,
              generated_images: idea.generatedImages,
              sources: idea.sources,
              existing_posts: idea.existingPosts,
              type: type
            });
            
          if (ideaError) {
            console.error('Error inserting idea:', ideaError);
          }
        }
      }
    }
    console.log('Seed completed successfully!');
  } catch (err) {
    console.error('Seed error:', err);
  }
}

seed();
