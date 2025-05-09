import { useParams } from 'react-router-dom';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import DefaultLayout from '@/layouts/default';
import { projects } from '@/data/projects';
import { Navigate } from 'react-router-dom';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }
  
  return (
    <DefaultLayout>
      <ProjectDetail project={project} />
    </DefaultLayout>
  );
}