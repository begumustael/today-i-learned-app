import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pjnvkbqvnavhxlfzilwp.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqbnZrYnF2bmF2aHhsZnppbHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1Njc1NTQsImV4cCI6MTk5MDE0MzU1NH0.hCKVaEWKi07VssTNAHmz1Li9k_tsb3EZ9hBI-kvX07k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
