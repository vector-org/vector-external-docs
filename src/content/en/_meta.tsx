import type { MetaRecord } from 'nextra'

export default {
  '--logo': {
    type: 'separator',
    title: (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
        <img
          src="/img/Vector-logo.svg"
          alt="Vector"
          style={{ height: '32px' }}
        />
      </div>
    ),
  },
} satisfies MetaRecord
