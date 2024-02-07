import PropTypes from 'prop-types';
import { ReactNode } from 'react'
import './style.css'

interface PageLayoutProps {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return <div className='PageLayout'>{children}</div>
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
