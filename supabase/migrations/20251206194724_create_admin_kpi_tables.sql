/*
  # Création des tables pour l'administration et les KPI

  1. Nouvelles Tables
    - `user_profiles`
      - `id` (uuid, primary key) - Référence auth.users
      - `email` (text) - Email de l'utilisateur
      - `full_name` (text) - Nom complet
      - `role` (text) - Rôle: 'admin' ou 'user'
      - `avatar_url` (text) - URL de l'avatar
      - `created_at` (timestamptz) - Date de création
      - `updated_at` (timestamptz) - Date de mise à jour
    
    - `kpi_metrics`
      - `id` (uuid, primary key)
      - `metric_name` (text) - Nom du KPI
      - `metric_value` (numeric) - Valeur du KPI
      - `metric_type` (text) - Type: 'revenue', 'users', 'growth', 'conversion'
      - `period` (text) - Période: 'daily', 'weekly', 'monthly', 'yearly'
      - `date` (date) - Date de la métrique
      - `created_at` (timestamptz) - Date de création

    - `platform_analytics`
      - `id` (uuid, primary key)
      - `total_users` (integer) - Nombre total d'utilisateurs
      - `active_users` (integer) - Utilisateurs actifs
      - `total_projects` (integer) - Nombre total de projets
      - `completed_projects` (integer) - Projets terminés
      - `total_revenue` (numeric) - Revenu total
      - `conversion_rate` (numeric) - Taux de conversion
      - `recorded_at` (timestamptz) - Date d'enregistrement

    - `admin_logs`
      - `id` (uuid, primary key)
      - `admin_id` (uuid) - ID de l'admin
      - `action` (text) - Action effectuée
      - `target_type` (text) - Type de cible (user, project, etc.)
      - `target_id` (uuid) - ID de la cible
      - `details` (jsonb) - Détails de l'action
      - `created_at` (timestamptz) - Date de l'action

  2. Sécurité
    - Enable RLS sur toutes les tables
    - Politiques restrictives pour admins uniquement
    - Politiques de lecture pour user_profiles
*/

-- Table des profils utilisateurs
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text,
  role text DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Politiques pour user_profiles
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id AND role = 'user');

CREATE POLICY "Admins can view all profiles"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update all profiles"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Table des métriques KPI
CREATE TABLE IF NOT EXISTS kpi_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name text NOT NULL,
  metric_value numeric NOT NULL,
  metric_type text NOT NULL CHECK (metric_type IN ('revenue', 'users', 'growth', 'conversion', 'engagement')),
  period text NOT NULL CHECK (period IN ('daily', 'weekly', 'monthly', 'yearly')),
  date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE kpi_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view KPI metrics"
  ON kpi_metrics FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can insert KPI metrics"
  ON kpi_metrics FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Table des analytics de la plateforme
CREATE TABLE IF NOT EXISTS platform_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  total_users integer DEFAULT 0,
  active_users integer DEFAULT 0,
  total_projects integer DEFAULT 0,
  completed_projects integer DEFAULT 0,
  total_revenue numeric DEFAULT 0,
  conversion_rate numeric DEFAULT 0,
  recorded_at timestamptz DEFAULT now()
);

ALTER TABLE platform_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view analytics"
  ON platform_analytics FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can insert analytics"
  ON platform_analytics FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Table des logs administrateurs
CREATE TABLE IF NOT EXISTS admin_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id uuid NOT NULL,
  action text NOT NULL,
  target_type text,
  target_id uuid,
  details jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view logs"
  ON admin_logs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can insert logs"
  ON admin_logs FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Insertion de données de test
INSERT INTO kpi_metrics (metric_name, metric_value, metric_type, period, date) VALUES
  ('Revenus Mensuels', 125000, 'revenue', 'monthly', CURRENT_DATE),
  ('Nouveaux Utilisateurs', 1250, 'users', 'monthly', CURRENT_DATE),
  ('Taux de Croissance', 15.5, 'growth', 'monthly', CURRENT_DATE),
  ('Taux de Conversion', 3.2, 'conversion', 'monthly', CURRENT_DATE),
  ('Engagement Utilisateur', 68.5, 'engagement', 'monthly', CURRENT_DATE);

INSERT INTO platform_analytics (total_users, active_users, total_projects, completed_projects, total_revenue, conversion_rate) VALUES
  (5420, 3214, 842, 567, 2500000, 3.2);
